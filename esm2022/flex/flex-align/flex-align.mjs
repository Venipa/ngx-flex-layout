/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Injectable } from '@angular/core';
import { BaseDirective2, StyleBuilder } from 'ngx-flexible-layout/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-flexible-layout/core";
export class FlexAlignStyleBuilder extends StyleBuilder {
    buildStyles(input) {
        input = input || 'stretch';
        const styles = {};
        // Cross-axis
        switch (input) {
            case 'start':
                styles['align-self'] = 'flex-start';
                break;
            case 'end':
                styles['align-self'] = 'flex-end';
                break;
            default:
                styles['align-self'] = input;
                break;
        }
        return styles;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FlexAlignStyleBuilder, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FlexAlignStyleBuilder, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FlexAlignStyleBuilder, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
const inputs = [
    'fxFlexAlign', 'fxFlexAlign.xs', 'fxFlexAlign.sm', 'fxFlexAlign.md',
    'fxFlexAlign.lg', 'fxFlexAlign.xl', 'fxFlexAlign.lt-sm', 'fxFlexAlign.lt-md',
    'fxFlexAlign.lt-lg', 'fxFlexAlign.lt-xl', 'fxFlexAlign.gt-xs', 'fxFlexAlign.gt-sm',
    'fxFlexAlign.gt-md', 'fxFlexAlign.gt-lg'
];
const selector = `
  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],
  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],
  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],
  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]
`;
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
export class FlexAlignDirective extends BaseDirective2 {
    DIRECTIVE_KEY = 'flex-align';
    constructor(elRef, styleUtils, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.init();
    }
    styleCache = flexAlignCache;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FlexAlignDirective, deps: [{ token: i0.ElementRef }, { token: i1.StyleUtils }, { token: FlexAlignStyleBuilder }, { token: i1.MediaMarshaller }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.0", type: FlexAlignDirective, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FlexAlignDirective, decorators: [{
            type: Directive
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.StyleUtils }, { type: FlexAlignStyleBuilder }, { type: i1.MediaMarshaller }] });
const flexAlignCache = new Map();
export class DefaultFlexAlignDirective extends FlexAlignDirective {
    inputs = inputs;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: DefaultFlexAlignDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.0", type: DefaultFlexAlignDirective, selector: "\n  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],\n  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],\n  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],\n  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n", inputs: { fxFlexAlign: "fxFlexAlign", "fxFlexAlign.xs": "fxFlexAlign.xs", "fxFlexAlign.sm": "fxFlexAlign.sm", "fxFlexAlign.md": "fxFlexAlign.md", "fxFlexAlign.lg": "fxFlexAlign.lg", "fxFlexAlign.xl": "fxFlexAlign.xl", "fxFlexAlign.lt-sm": "fxFlexAlign.lt-sm", "fxFlexAlign.lt-md": "fxFlexAlign.lt-md", "fxFlexAlign.lt-lg": "fxFlexAlign.lt-lg", "fxFlexAlign.lt-xl": "fxFlexAlign.lt-xl", "fxFlexAlign.gt-xs": "fxFlexAlign.gt-xs", "fxFlexAlign.gt-sm": "fxFlexAlign.gt-sm", "fxFlexAlign.gt-md": "fxFlexAlign.gt-md", "fxFlexAlign.gt-lg": "fxFlexAlign.gt-lg" }, usesInheritance: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: DefaultFlexAlignDirective, decorators: [{
            type: Directive,
            args: [{ selector, inputs }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC1hbGlnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnMvZmxleC1sYXlvdXQvZmxleC9mbGV4LWFsaWduL2ZsZXgtYWxpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFFLFNBQVMsRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUNILGNBQWMsRUFBbUIsWUFBWSxFQUdoRCxNQUFNLDBCQUEwQixDQUFDOzs7QUFHbEMsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFlBQVk7SUFDckQsV0FBVyxDQUFDLEtBQWE7UUFDdkIsS0FBSyxHQUFHLEtBQUssSUFBSSxTQUFTLENBQUM7UUFDM0IsTUFBTSxNQUFNLEdBQW9CLEVBQUUsQ0FBQztRQUVuQyxhQUFhO1FBQ2IsUUFBUSxLQUFLLEVBQUUsQ0FBQztZQUNkLEtBQUssT0FBTztnQkFDVixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsWUFBWSxDQUFDO2dCQUNwQyxNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQ2xDLE1BQU07WUFDUjtnQkFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixNQUFNO1FBQ1YsQ0FBQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7dUdBbkJVLHFCQUFxQjsyR0FBckIscUJBQXFCLGNBRFQsTUFBTTs7MkZBQ2xCLHFCQUFxQjtrQkFEakMsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7O0FBdUJoQyxNQUFNLE1BQU0sR0FBRztJQUNiLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDbkUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CO0lBQzVFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtJQUNsRixtQkFBbUIsRUFBRSxtQkFBbUI7Q0FDekMsQ0FBQztBQUNGLE1BQU0sUUFBUSxHQUFHOzs7OztDQUtoQixDQUFDO0FBRUY7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxjQUFjO0lBRWpDLGFBQWEsR0FBRyxZQUFZLENBQUM7SUFFaEQsWUFBWSxLQUFpQixFQUNqQixVQUFzQixFQUN0QixZQUFtQyxFQUNuQyxPQUF3QjtRQUNsQyxLQUFLLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVrQixVQUFVLEdBQUcsY0FBYyxDQUFDO3VHQVpwQyxrQkFBa0I7MkZBQWxCLGtCQUFrQjs7MkZBQWxCLGtCQUFrQjtrQkFEOUIsU0FBUzs7QUFnQlYsTUFBTSxjQUFjLEdBQWlDLElBQUksR0FBRyxFQUFFLENBQUM7QUFHL0QsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGtCQUFrQjtJQUM1QyxNQUFNLEdBQUcsTUFBTSxDQUFDO3VHQUR4Qix5QkFBeUI7MkZBQXpCLHlCQUF5Qjs7MkZBQXpCLHlCQUF5QjtrQkFEckMsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBCYXNlRGlyZWN0aXZlMiwgTWVkaWFNYXJzaGFsbGVyLCBTdHlsZUJ1aWxkZXIsXG4gICAgU3R5bGVEZWZpbml0aW9uLFxuICAgIFN0eWxlVXRpbHNcbn0gZnJvbSAnbmd4LWZsZXhpYmxlLWxheW91dC9jb3JlJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgRmxleEFsaWduU3R5bGVCdWlsZGVyIGV4dGVuZHMgU3R5bGVCdWlsZGVyIHtcbiAgYnVpbGRTdHlsZXMoaW5wdXQ6IHN0cmluZykge1xuICAgIGlucHV0ID0gaW5wdXQgfHwgJ3N0cmV0Y2gnO1xuICAgIGNvbnN0IHN0eWxlczogU3R5bGVEZWZpbml0aW9uID0ge307XG5cbiAgICAvLyBDcm9zcy1heGlzXG4gICAgc3dpdGNoIChpbnB1dCkge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICBzdHlsZXNbJ2FsaWduLXNlbGYnXSA9ICdmbGV4LXN0YXJ0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgICBzdHlsZXNbJ2FsaWduLXNlbGYnXSA9ICdmbGV4LWVuZCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3R5bGVzWydhbGlnbi1zZWxmJ10gPSBpbnB1dDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxufVxuXG5jb25zdCBpbnB1dHMgPSBbXG4gICdmeEZsZXhBbGlnbicsICdmeEZsZXhBbGlnbi54cycsICdmeEZsZXhBbGlnbi5zbScsICdmeEZsZXhBbGlnbi5tZCcsXG4gICdmeEZsZXhBbGlnbi5sZycsICdmeEZsZXhBbGlnbi54bCcsICdmeEZsZXhBbGlnbi5sdC1zbScsICdmeEZsZXhBbGlnbi5sdC1tZCcsXG4gICdmeEZsZXhBbGlnbi5sdC1sZycsICdmeEZsZXhBbGlnbi5sdC14bCcsICdmeEZsZXhBbGlnbi5ndC14cycsICdmeEZsZXhBbGlnbi5ndC1zbScsXG4gICdmeEZsZXhBbGlnbi5ndC1tZCcsICdmeEZsZXhBbGlnbi5ndC1sZydcbl07XG5jb25zdCBzZWxlY3RvciA9IGBcbiAgW2Z4RmxleEFsaWduXSwgW2Z4RmxleEFsaWduLnhzXSwgW2Z4RmxleEFsaWduLnNtXSwgW2Z4RmxleEFsaWduLm1kXSxcbiAgW2Z4RmxleEFsaWduLmxnXSwgW2Z4RmxleEFsaWduLnhsXSwgW2Z4RmxleEFsaWduLmx0LXNtXSwgW2Z4RmxleEFsaWduLmx0LW1kXSxcbiAgW2Z4RmxleEFsaWduLmx0LWxnXSwgW2Z4RmxleEFsaWduLmx0LXhsXSwgW2Z4RmxleEFsaWduLmd0LXhzXSwgW2Z4RmxleEFsaWduLmd0LXNtXSxcbiAgW2Z4RmxleEFsaWduLmd0LW1kXSwgW2Z4RmxleEFsaWduLmd0LWxnXVxuYDtcblxuLyoqXG4gKiAnZmxleC1hbGlnbicgZmxleGJveCBzdHlsaW5nIGRpcmVjdGl2ZVxuICogQWxsb3dzIGVsZW1lbnQtc3BlY2lmaWMgb3ZlcnJpZGVzIGZvciBjcm9zcy1heGlzIGFsaWdubWVudHMgaW4gYSBsYXlvdXQgY29udGFpbmVyXG4gKiBAc2VlIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vYWxtYW5hYy9wcm9wZXJ0aWVzL2EvYWxpZ24tc2VsZi9cbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgRmxleEFsaWduRGlyZWN0aXZlIGV4dGVuZHMgQmFzZURpcmVjdGl2ZTIge1xuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBESVJFQ1RJVkVfS0VZID0gJ2ZsZXgtYWxpZ24nO1xuXG4gIGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBzdHlsZVV0aWxzOiBTdHlsZVV0aWxzLFxuICAgICAgICAgICAgICBzdHlsZUJ1aWxkZXI6IEZsZXhBbGlnblN0eWxlQnVpbGRlcixcbiAgICAgICAgICAgICAgbWFyc2hhbDogTWVkaWFNYXJzaGFsbGVyKSB7XG4gICAgc3VwZXIoZWxSZWYsIHN0eWxlQnVpbGRlciwgc3R5bGVVdGlscywgbWFyc2hhbCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgc3R5bGVDYWNoZSA9IGZsZXhBbGlnbkNhY2hlO1xufVxuXG5jb25zdCBmbGV4QWxpZ25DYWNoZTogTWFwPHN0cmluZywgU3R5bGVEZWZpbml0aW9uPiA9IG5ldyBNYXAoKTtcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3IsIGlucHV0c30pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZsZXhBbGlnbkRpcmVjdGl2ZSBleHRlbmRzIEZsZXhBbGlnbkRpcmVjdGl2ZSB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBpbnB1dHMgPSBpbnB1dHM7XG59XG4iXX0=