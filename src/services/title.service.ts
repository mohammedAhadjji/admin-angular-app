import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new Subject<string>();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Mettre à jour le titre en fonction du chemin (path)
        this.setTitleFromPath(event.url);
      }
    });
  }

  private setTitleFromPath(url: string): void {
    const routeName = this.getRouteNameFromUrl(url);
    let title = 'Dashboard'; // Titre par défaut

    if (routeName) {
      title = routeName;
    }

    // Émettre le nouveau titre
    this.titleSubject.next(title);
  }

  private getRouteNameFromUrl(url: string): string | null {
    // Supprimez le premier "/" et divisez l'URL en segments
    const segments = url.substring(1).split('/');
    
    // Retourne le premier segment (le nom du route)
    return segments.length > 0 ? segments[0] : null;
  }

  getTitle(): Subject<string> {
    return this.titleSubject;
  }
}
