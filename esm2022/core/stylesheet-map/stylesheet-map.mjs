/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
export class StylesheetMap {
    stylesheet = new Map();
    /**
     * Add an individual style to an HTML element
     */
    addStyleToElement(element, style, value) {
        const stylesheet = this.stylesheet.get(element);
        if (stylesheet) {
            stylesheet.set(style, value);
        }
        else {
            this.stylesheet.set(element, new Map([[style, value]]));
        }
    }
    /**
     * Clear the virtual stylesheet
     */
    clearStyles() {
        this.stylesheet.clear();
    }
    /**
     * Retrieve a given style for an HTML element
     */
    getStyleForElement(el, styleName) {
        const styles = this.stylesheet.get(el);
        let value = '';
        if (styles) {
            const style = styles.get(styleName);
            if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
            }
        }
        return value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: StylesheetMap, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: StylesheetMap, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: StylesheetMap, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzaGVldC1tYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJzL2ZsZXgtbGF5b3V0L2NvcmUvc3R5bGVzaGVldC1tYXAvc3R5bGVzaGVldC1tYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFekM7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8sYUFBYTtJQUVmLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBMkMsQ0FBQztJQUV6RTs7T0FFRztJQUNILGlCQUFpQixDQUFDLE9BQW9CLEVBQUUsS0FBYSxFQUFFLEtBQW9CO1FBQ3pFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksVUFBVSxFQUFFLENBQUM7WUFDZixVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQkFBa0IsQ0FBQyxFQUFlLEVBQUUsU0FBaUI7UUFDbkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNYLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQzNELEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO3VHQXBDVSxhQUFhOzJHQUFiLGFBQWEsY0FERCxNQUFNOzsyRkFDbEIsYUFBYTtrQkFEekIsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVXRpbGl0eSB0byBlbXVsYXRlIGEgQ1NTIHN0eWxlc2hlZXRcbiAqXG4gKiBUaGlzIHV0aWxpdHkgY2xhc3Mgc3RvcmVzIGFsbCBvZiB0aGUgc3R5bGVzIGZvciBhIGdpdmVuIEhUTUwgZWxlbWVudFxuICogYXMgYSByZWFkb25seSBgc3R5bGVzaGVldGAgbWFwLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBTdHlsZXNoZWV0TWFwIHtcblxuICByZWFkb25seSBzdHlsZXNoZWV0ID0gbmV3IE1hcDxIVE1MRWxlbWVudCwgTWFwPHN0cmluZywgc3RyaW5nfG51bWJlcj4+KCk7XG5cbiAgLyoqXG4gICAqIEFkZCBhbiBpbmRpdmlkdWFsIHN0eWxlIHRvIGFuIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgYWRkU3R5bGVUb0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHN0eWxlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd8bnVtYmVyKSB7XG4gICAgY29uc3Qgc3R5bGVzaGVldCA9IHRoaXMuc3R5bGVzaGVldC5nZXQoZWxlbWVudCk7XG4gICAgaWYgKHN0eWxlc2hlZXQpIHtcbiAgICAgIHN0eWxlc2hlZXQuc2V0KHN0eWxlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGVzaGVldC5zZXQoZWxlbWVudCwgbmV3IE1hcChbW3N0eWxlLCB2YWx1ZV1dKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSB2aXJ0dWFsIHN0eWxlc2hlZXRcbiAgICovXG4gIGNsZWFyU3R5bGVzKCkge1xuICAgIHRoaXMuc3R5bGVzaGVldC5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgZ2l2ZW4gc3R5bGUgZm9yIGFuIEhUTUwgZWxlbWVudFxuICAgKi9cbiAgZ2V0U3R5bGVGb3JFbGVtZW50KGVsOiBIVE1MRWxlbWVudCwgc3R5bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuc3R5bGVzaGVldC5nZXQoZWwpO1xuICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgIGlmIChzdHlsZXMpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzLmdldChzdHlsZU5hbWUpO1xuICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWx1ZSA9IHN0eWxlICsgJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19