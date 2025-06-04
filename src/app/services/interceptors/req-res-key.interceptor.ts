import type { HttpInterceptorFn } from '@angular/common/http';

export const reqResKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const request = req.clone({headers: req.headers.append('x-api-key', 'reqres-free-v1')})
  return next(request);
};
