import {
    AfterViewInit,
    Component,
    ContentChild,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    QueryList,
    SimpleChanges,
    inject,
} from '@angular/core';
import { TestService } from '../../services/test.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Child2Component } from '../child-2/child-2.component';

@Component({
    selector: 'app-child',
    standalone: true,
    imports: [FormsModule, NgIf],
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss', './img.scss'],
})
export class ChildComponent implements OnChanges, AfterViewInit {
    @Input() data!: string;
    @Output() childEvent = new EventEmitter<string>();
    @ContentChild('contentChild') contentChild!: ElementRef;
    @ContentChildren(Child2Component)
    contentChildren!: QueryList<Child2Component>;

    childData: string = 'child data';
    currentTime!: string;
    isRed: boolean = true;
    isBlue: boolean = true;
    imageUrl: string = 'https://i.imgur.com/PMMTeFY.png';
    service = inject(TestService);

    ngOnInit(): void {
        this.updateTime();
    }

    updateTime(): void {
        this.currentTime = this.service.getCurrentTime();
    }

    sendEvent(): void {
        this.childEvent.emit('emit');
    }

    click($event: any): void {
        console.log($event);
    }

    sayHello(): void {
        console.log('Hello');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ChildComponent ngOnChanges');
        console.log(changes);
    }

    ngAfterViewInit(): void {
        this.contentChild.nativeElement.style.color = 'blue';
        console.log(this.contentChildren);
    }
}
