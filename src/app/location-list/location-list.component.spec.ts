import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { LocationListComponent } from "./location-list.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { TranslateModule } from "@ngx-translate/core";

describe('Location List Component', () => {
    let fixture : ComponentFixture<LocationListComponent>
    let component : LocationListComponent
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                TranslateModule.forRoot(),
                MatSlideToggleModule,
                HttpClientModule,
                ReactiveFormsModule
            ],
            declarations: [
                LocationListComponent
            ]
        }).compileComponents()
        fixture = TestBed.createComponent(LocationListComponent)
        component = fixture.componentInstance
    })

    it('should exist', ()=>{
        expect(component).toBeTruthy()
    })

    it('check filter form', () => {
        fixture.detectChanges();
    fixture.whenStable().then(() => {
        const form = component.myForm
        const nameElement: HTMLInputElement = fixture.debugElement.nativeElement.querrySelector('#name')
        const typeElement: HTMLInputElement = fixture.debugElement.nativeElement.querrySelector('#type')
        const dimensionElement: HTMLInputElement = fixture.debugElement.nativeElement.querrySelector('#dimension')
        nameElement.value = 'Earth'
        nameElement.dispatchEvent(new Event('input'))
        typeElement.value = 'Planet'
        typeElement.dispatchEvent(new Event('input'))
        dimensionElement.value = 'C-1'
        dimensionElement.dispatchEvent(new Event('input'))

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(form.value.name).toEqual('Earth');
            expect(form.value.type).toEqual('Planet');
            expect(form.value.dimension).toEqual('C-1');
        })
    })
        
    })
})
