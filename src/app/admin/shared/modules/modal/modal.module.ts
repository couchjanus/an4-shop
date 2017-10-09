import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent, ModalContent} from './modal.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot()
    ],
    entryComponents: [ModalComponent,ModalContent],
    declarations: [ModalComponent, ModalContent],
    providers: [ModalComponent]
})
export class ModalModule {
}
