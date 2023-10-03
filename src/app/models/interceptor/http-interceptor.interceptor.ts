import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * HTTP interceptor to add an Authorization header to outgoing requests.
 */
@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  /**
   * Intercept HTTP requests and add the Authorization header.
   * @param request - The HTTP request to be intercepted.
   * @param next - The HTTP handler for sending the modified request.
   * @returns An Observable of the HttpEvent representing the response.
   */
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    // Clone the original request to avoid modifying it directly.
    const req = request.clone({
      setHeaders: {
        Authorization: 'Bearer bda53789-d59e-46cd-9bc4-2936630fde39', // Add your token here.
      },
    });

    // Pass the modified request to the next handler.
    return next.handle(req);
  }
}
