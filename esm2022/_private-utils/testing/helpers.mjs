import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { extendObject } from 'ngx-flexible-layout/_private-utils';
/**
 * Function generator that captures a Component Type accessor and enables
 * `createTestComponent()` to be reusable for *any* captured Component class.
 */
export function makeCreateTestComponent(getClass) {
    let componentAny;
    // Return actual `createTestComponent()` function
    return function createTestComponent(template, styles) {
        if (!componentAny) {
            // Defer access to Component class to enable metadata to be configured properly...
            componentAny = getClass();
        }
        return TestBed
            .overrideComponent(componentAny, {
            set: {
                template: template,
                styles: styles || [],
            }
        })
            .createComponent(componentAny);
    };
}
/**
 *
 */
export function expectNativeEl(fixture, instanceOptions) {
    extendObject(fixture.componentInstance, instanceOptions || {});
    fixture.detectChanges();
    return expect(fixture.debugElement.children[0].nativeElement);
}
/**
 *
 */
export function expectEl(debugEl) {
    return expect(debugEl.nativeElement);
}
export function queryFor(fixture, selector) {
    return fixture.debugElement.queryAll(By.css(selector));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnMvZmxleC1sYXlvdXQvX3ByaXZhdGUtdXRpbHMvdGVzdGluZy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLE9BQU8sRUFBb0IsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUlsRTs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsUUFBMEI7SUFDaEUsSUFBSSxZQUF1QixDQUFDO0lBRTVCLGlEQUFpRDtJQUNqRCxPQUFPLFNBQVMsbUJBQW1CLENBQUMsUUFBZ0IsRUFBRSxNQUFZO1FBQ2hFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNsQixrRkFBa0Y7WUFDbEYsWUFBWSxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFDRCxPQUFPLE9BQU87YUFDVCxpQkFBaUIsQ0FBQyxZQUFZLEVBQUU7WUFDL0IsR0FBRyxFQUFFO2dCQUNILFFBQVEsRUFBRSxRQUFRO2dCQUNsQixNQUFNLEVBQUUsTUFBTSxJQUFJLEVBQUU7YUFDckI7U0FDRixDQUFDO2FBQ0QsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQUMsT0FBOEIsRUFBRSxlQUFzQjtJQUNuRixZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMvRCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLFFBQVEsQ0FBQyxPQUFxQjtJQUM1QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUdELE1BQU0sVUFBVSxRQUFRLENBQUMsT0FBOEIsRUFBRSxRQUFnQjtJQUN2RSxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBEZWJ1Z0VsZW1lbnQsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEZpeHR1cmUsIFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQnkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGV4dGVuZE9iamVjdCB9IGZyb20gJ25neC1mbGV4aWJsZS1sYXlvdXQvX3ByaXZhdGUtdXRpbHMnO1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRDbGF6ekZuID0gKCkgPT4gVHlwZTxhbnk+O1xuXG4vKipcbiAqIEZ1bmN0aW9uIGdlbmVyYXRvciB0aGF0IGNhcHR1cmVzIGEgQ29tcG9uZW50IFR5cGUgYWNjZXNzb3IgYW5kIGVuYWJsZXNcbiAqIGBjcmVhdGVUZXN0Q29tcG9uZW50KClgIHRvIGJlIHJldXNhYmxlIGZvciAqYW55KiBjYXB0dXJlZCBDb21wb25lbnQgY2xhc3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ3JlYXRlVGVzdENvbXBvbmVudChnZXRDbGFzczogQ29tcG9uZW50Q2xhenpGbikge1xuICBsZXQgY29tcG9uZW50QW55OiBUeXBlPGFueT47XG5cbiAgLy8gUmV0dXJuIGFjdHVhbCBgY3JlYXRlVGVzdENvbXBvbmVudCgpYCBmdW5jdGlvblxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlVGVzdENvbXBvbmVudCh0ZW1wbGF0ZTogc3RyaW5nLCBzdHlsZXM/OiBhbnkpOiBDb21wb25lbnRGaXh0dXJlPFR5cGU8YW55Pj4ge1xuICAgIGlmICghY29tcG9uZW50QW55KSB7XG4gICAgICAvLyBEZWZlciBhY2Nlc3MgdG8gQ29tcG9uZW50IGNsYXNzIHRvIGVuYWJsZSBtZXRhZGF0YSB0byBiZSBjb25maWd1cmVkIHByb3Blcmx5Li4uXG4gICAgICBjb21wb25lbnRBbnkgPSBnZXRDbGFzcygpO1xuICAgIH1cbiAgICByZXR1cm4gVGVzdEJlZFxuICAgICAgICAub3ZlcnJpZGVDb21wb25lbnQoY29tcG9uZW50QW55LCB7XG4gICAgICAgICAgc2V0OiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgICAgICAgICBzdHlsZXM6IHN0eWxlcyB8fCBbXSxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50QW55KTtcbiAgfTtcbn1cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwZWN0TmF0aXZlRWwoZml4dHVyZTogQ29tcG9uZW50Rml4dHVyZTxhbnk+LCBpbnN0YW5jZU9wdGlvbnMgPzogYW55KTogYW55IHtcbiAgZXh0ZW5kT2JqZWN0KGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2UsIGluc3RhbmNlT3B0aW9ucyB8fCB7fSk7XG4gIGZpeHR1cmUuZGV0ZWN0Q2hhbmdlcygpO1xuICByZXR1cm4gZXhwZWN0KGZpeHR1cmUuZGVidWdFbGVtZW50LmNoaWxkcmVuWzBdLm5hdGl2ZUVsZW1lbnQpO1xufVxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBlY3RFbChkZWJ1Z0VsOiBEZWJ1Z0VsZW1lbnQpOiBhbnkge1xuICByZXR1cm4gZXhwZWN0KGRlYnVnRWwubmF0aXZlRWxlbWVudCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5Rm9yKGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8YW55Piwgc2VsZWN0b3I6IHN0cmluZyk6IERlYnVnRWxlbWVudFtdIHtcbiAgcmV0dXJuIGZpeHR1cmUuZGVidWdFbGVtZW50LnF1ZXJ5QWxsKEJ5LmNzcyhzZWxlY3RvcikpO1xufVxuXG5cbiJdfQ==