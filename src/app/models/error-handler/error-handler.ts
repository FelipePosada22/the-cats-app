import { ErrorHandler } from '@angular/core';

/**
 * Custom error handler to handle and log errors.
 */
export class MyErrorHandler implements ErrorHandler {
  /**
   * Handle and log errors.
   * @param error - The error object to be handled.
   */
  handleError(error: any) {
    // Log the error to the console.
    console.log(error, 'error');
  }
}
