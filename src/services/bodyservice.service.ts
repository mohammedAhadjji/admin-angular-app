import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodyClassService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  addClasses(classNames: string[]) {
    classNames.forEach(className => {
      this.renderer.addClass(document.body, className);
    });
  }

  removeClasses(classNames: string[]) {
    classNames.forEach(className => {
      this.renderer.removeClass(document.body, className);
    });
  }

  toggleClasses(firstClass: string[], secondClass: string[]) {
    const bodyClasses = document.body.classList;
    if (firstClass.every(className => bodyClasses.contains(className))) {
      this.removeClasses(firstClass);
      this.addClasses(secondClass);
    } else if (secondClass.every(className => bodyClasses.contains(className))) {
      this.removeClasses(secondClass);
      this.addClasses(firstClass);
    }
  }
}
