export interface TimingsStatus {
  isOpen: boolean;
  statusMessage: string;
  countdownText: string;
  nextEventTime: string;
}

export function getStoreStatus(testDate?: Date): TimingsStatus {
  const now = testDate || new Date();
  
  // Convert current time to India Standard Time (IST) if needed, 
  // but for local UI running on user browser, we can use local time or simulate IST.
  // Let's use local date & hours.
  const day = now.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeInMinutes = hours * 60 + minutes;

  // Timings:
  // Mon: 10:30 AM (630 mins) to 9:30 PM (1290 mins)
  // Tue-Sun: 10:30 AM (630 mins) to 10:00 PM (1320 mins)
  const isMonday = day === 1;
  const openTime = 10 * 60 + 30; // 10:30 AM = 630 mins
  const closeTime = isMonday ? (21 * 60 + 30) : (22 * 60); // 9:30 PM (1290 mins) or 10:00 PM (1320 mins)

  let isOpen = false;
  let statusMessage = '';
  let countdownText = '';
  let nextEventTime = '';

  if (currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime) {
    isOpen = true;
    const formatTime = (minutesTotal: number) => {
      const h = Math.floor(minutesTotal / 60);
      const m = minutesTotal % 60;
      const period = h >= 12 ? 'PM' : 'AM';
      const formattedH = h % 12 === 0 ? 12 : h % 12;
      const formattedM = m === 0 ? '' : `:${m.toString().padStart(2, '0')}`;
      return `${formattedH}${formattedM} ${period}`;
    };
    
    statusMessage = `Open Now until ${formatTime(closeTime)}`;
    
    const remainingMinutes = closeTime - currentTimeInMinutes;
    const remHours = Math.floor(remainingMinutes / 60);
    const remMins = remainingMinutes % 60;
    
    if (remHours > 0) {
      countdownText = `Closes in ${remHours} hr${remHours > 1 ? 's' : ''} ${remMins > 0 ? `${remMins} min${remMins > 1 ? 's' : ''}` : ''}`;
    } else {
      countdownText = `Closes in ${remMins} min${remMins > 1 ? 's' : ''}`;
    }
    nextEventTime = formatTime(closeTime);
  } else {
    isOpen = false;
    statusMessage = 'Closed Now';
    
    // Calculate minutes until next opening (10:30 AM)
    let minutesUntilOpen = 0;
    if (currentTimeInMinutes < openTime) {
      minutesUntilOpen = openTime - currentTimeInMinutes;
    } else {
      // It's after closing time today. Next opening is 10:30 AM tomorrow.
      minutesUntilOpen = (24 * 60 - currentTimeInMinutes) + openTime;
    }

    const remHours = Math.floor(minutesUntilOpen / 60);
    const remMins = minutesUntilOpen % 60;
    
    if (remHours > 24) {
      countdownText = 'Opens tomorrow at 10:30 AM';
    } else if (remHours > 0) {
      countdownText = `Opens in ${remHours} hr${remHours > 1 ? 's' : ''} ${remMins > 0 ? `${remMins} min${remMins > 1 ? 's' : ''}` : ''}`;
    } else {
      countdownText = `Opens in ${remMins} min${remMins > 1 ? 's' : ''}`;
    }
    nextEventTime = '10:30 AM';
  }

  return {
    isOpen,
    statusMessage,
    countdownText,
    nextEventTime
  };
}

export const BUSINESS_HOURS_LIST = [
  { day: 'Monday', hours: '10:30 AM – 9:30 PM' },
  { day: 'Tuesday', hours: '10:30 AM – 10:00 PM' },
  { day: 'Wednesday', hours: '10:30 AM – 10:00 PM' },
  { day: 'Thursday', hours: '10:30 AM – 10:00 PM' },
  { day: 'Friday', hours: '10:30 AM – 10:00 PM' },
  { day: 'Saturday', hours: '10:30 AM – 10:00 PM' },
  { day: 'Sunday', hours: '10:30 AM – 10:00 PM' }
];
