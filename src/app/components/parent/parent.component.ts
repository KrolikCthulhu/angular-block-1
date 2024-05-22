import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    ElementRef,
    OnDestroy,
    OnInit,
    QueryList,
    TemplateRef,
    ViewChild,
    ViewChildren,
    ViewEncapsulation,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { Child2Component } from '../child-2/child-2.component';

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule, ChildComponent, Child2Component],
})
export class ParentComponent
    implements
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    public data: string = 'data from parent';
    @ViewChild(ChildComponent) childComponent!: ChildComponent;
    @ViewChild('template1') template1!: TemplateRef<any>;
    @ViewChild('template2') template2!: TemplateRef<any>;
    currentTemplate!: TemplateRef<any>;
    @ViewChildren('text', { read: ElementRef })
    textElements!: QueryList<ElementRef>;

    handleChildEvent(message: string): void {
        console.log(message);
    }

    callChildMethod(): void {
        this.childComponent.sayHello();
    }

    showTemplate1(): void {
        this.currentTemplate = this.template1;
    }

    showTemplate2(): void {
        this.currentTemplate = this.template2;
    }

    ngOnInit(): void {
        console.log('ParentComponent ngOnInit');
    }

    ngDoCheck(): void {
        console.log('ParentComponent ngDoCheck');
    }

    ngAfterContentInit(): void {
        console.log('ParentComponent ngAfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('ParentComponent ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('ParentComponent ngAfterViewInit');
        console.log(this.childComponent.childData);
        this.textElements.forEach((element, index) => {
            element.nativeElement.textContent = (index + 1).toString();
        });
    }

    ngAfterViewChecked(): void {
        console.log('ParentComponent ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        console.log('ParentComponent ngOnDestroy');
    }
}
