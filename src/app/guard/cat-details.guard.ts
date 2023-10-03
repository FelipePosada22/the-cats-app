import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateFn,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CatsService } from '../cats/service/cats.service';

/**
 * Guard to check if there are current cat details available.
 */
@Injectable({
  providedIn: 'root',
})
export class CatDetailsGuard implements CanActivate {
  constructor(private catsService: CatsService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Check if current cat details are available in the CatsService.
    if (!this.catsService.currentCatDetails) {
      // If not available, trigger the catDetailsGuard function.
      return catDetailsGuard(route, state);
    }
    // If cat details are available, allow navigation.
    return true;
  }
}

/**
 * Function to navigate to the home page (cats list) when cat details are not available.
 * It returns false to prevent navigation.
 */
export const catDetailsGuard: CanActivateFn = (route, state) => {
  return navigateToHome();
};

/**
 * Function to navigate to the home page (cats list) and return false.
 * This function is used by the catDetailsGuard function.
 */
const navigateToHome = () => {
  // Redirect to the home page (cats list).
  window.location.href = '/cats';
  // Return false to prevent navigation.
  return false;
};
