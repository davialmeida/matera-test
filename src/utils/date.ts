import { format as _format, Locale } from 'date-fns';

class DateUtils {
  static format(date: Date, format: string, locale?: Locale) {
    return _format(date, format, {
      locale,
    });
  }
}

export default DateUtils;
