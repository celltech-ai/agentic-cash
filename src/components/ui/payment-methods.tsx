import { CreditCard, Shield } from 'lucide-react';

export function PaymentMethods() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Shield className="h-4 w-4 text-green-400" />
        <span>Secure payment powered by</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Stripe */}
        <div className="flex h-8 items-center rounded-md bg-white px-3">
          <svg className="h-5 w-auto" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 12.5C60 5.596 54.404 0 47.5 0H12.5C5.596 0 0 5.596 0 12.5C0 19.404 5.596 25 12.5 25H47.5C54.404 25 60 19.404 60 12.5Z" fill="#635BFF"/>
            <path d="M13.5 10.5C13.5 9.8 14.1 9.5 15 9.5C16.3 9.5 17.9 9.9 19.2 10.6V7.3C17.8 6.7 16.4 6.5 15 6.5C11.8 6.5 9.5 8.1 9.5 10.7C9.5 14.8 15.2 14.1 15.2 15.9C15.2 16.7 14.5 17 13.5 17C12.1 17 10.4 16.4 9 15.6V19C10.5 19.6 12 19.9 13.5 19.9C16.8 19.9 19.2 18.3 19.2 15.7C19.2 11.3 13.5 12 13.5 10.5Z" fill="white"/>
            <path d="M29.5 19.4C28.2 19.4 27.3 18.8 26.7 17.9L26.5 19.7H23V4.5H27V9.5C27.6 8.6 28.5 7.9 29.8 7.9C32.5 7.9 34.5 10 34.5 13.6C34.5 17.5 32.3 19.4 29.5 19.4ZM28.7 10.3C28 10.3 27.5 10.5 27.1 11V16.4C27.5 16.8 28 17 28.7 17C29.9 17 30.7 15.9 30.7 13.6C30.7 11.4 29.9 10.3 28.7 10.3Z" fill="white"/>
            <path d="M41.5 19.4C39.8 19.4 38.5 18.6 37.9 17.4L37.7 19.7H34.2V4.5H38.2V9.4C38.8 8.5 39.9 7.9 41.3 7.9C44 7.9 46.5 10 46.5 13.6C46.5 17.6 44 19.4 41.5 19.4ZM40.3 11C39.6 11 39.1 11.3 38.7 11.8V15.5C39.1 16 39.6 16.3 40.3 16.3C41.5 16.3 42.3 15.2 42.3 13.6C42.3 12 41.5 11 40.3 11Z" fill="white"/>
            <path d="M51.5 6.5C50.2 6.5 49.2 7.1 48.6 8L48.4 7.7H45V19.7H49V12.5C49.5 11.7 50.3 11.2 51.2 11.2C52.4 11.2 53 12 53 13.3V19.7H57V12.4C57 9.3 55.2 6.5 51.5 6.5Z" fill="white"/>
          </svg>
        </div>

        {/* PayPal */}
        <div className="flex h-8 items-center rounded-md bg-white px-3">
          <svg className="h-5 w-auto" viewBox="0 0 100 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 2L8 22H3L7.5 2H12.5Z" fill="#003087"/>
            <path d="M22.5 2L18 22H13L17.5 2H22.5Z" fill="#003087"/>
            <path d="M32.5 2L28 22H23L27.5 2H32.5Z" fill="#003087"/>
            <path d="M42.5 2L38 22H33L37.5 2H42.5Z" fill="#009CDE"/>
            <path d="M52.5 2L48 22H43L47.5 2H52.5Z" fill="#009CDE"/>
            <path d="M62.5 2L58 22H53L57.5 2H62.5Z" fill="#009CDE"/>
          </svg>
        </div>

        {/* Visa */}
        <div className="flex h-8 items-center rounded-md bg-white px-3">
          <svg className="h-5 w-auto" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 1L14.5 15H10L17 1H21.5Z" fill="#1A1F71"/>
            <path d="M33.5 1L26.5 15H22L29 1H33.5Z" fill="#1A1F71"/>
            <path d="M45.5 1L38.5 15H34L41 1H45.5Z" fill="#F7B600"/>
          </svg>
        </div>

        {/* Mastercard */}
        <div className="flex h-8 items-center rounded-md bg-white px-3">
          <svg className="h-5 w-auto" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="15" r="12" fill="#EB001B"/>
            <circle cx="32" cy="15" r="12" fill="#F79E1B"/>
            <path d="M25 4.5C28.5 7.5 31 12 31 17C31 22 28.5 26.5 25 29.5C21.5 26.5 19 22 19 17C19 12 21.5 7.5 25 4.5Z" fill="#FF5F00"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
