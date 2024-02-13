import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { IconComponent } from './components/icon/icon.component';
import { ListComponent } from './components/list/list.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { FormComponent } from './dialogs/form/form.component';
import { ProgressComponent } from './dialogs/progress/progress.component';
import { SelectComponent } from './dialogs/select/select.component';
import { MaterialModule } from './material.module';
import { TitleCaseAllPipe } from './pipes/title-case-all.pipe';
import { DisplaySelectPipe } from './components/form-field/display-select.pipe';
import { ButtonBarComponent } from './components/button-bar/button-bar.component';
import { DisplayRelatedPipe } from './pipes/display-related.pipe';
import { AttentionMessageComponent } from './components/attention-message/attention-message.component';
import { ListSortComponent } from './dialogs/list-sort/list-sort.component';
import { ListFilterComponent } from './components/list-filter/list-filter.component';
import { SelectDateRangeComponent } from '../UI/dialogs/select-date-range/select-date-range.component';
import { SortIconComponent } from './components/sort-icon/sort-icon.component';

@NgModule({
    imports: [
        MaterialModule,
        RouterModule,
    ],
    declarations: [
        //  Dialogs
        ConfirmComponent,
        FormComponent,
        ProgressComponent,
        SelectComponent,
        FormFieldComponent,
        IconComponent,
        ListComponent,
        LoaderComponent,
        SectionHeaderComponent,
        TitleCaseAllPipe,
        DisplaySelectPipe,
        DisplayRelatedPipe,
        ButtonBarComponent,
        AttentionMessageComponent,
        ListSortComponent,
        ListFilterComponent,
        SelectDateRangeComponent,
        SortIconComponent,
    ],
    exports: [
        MaterialModule,
        //  Dialogs
        ConfirmComponent,
        FormComponent,
        ProgressComponent,
        SelectComponent,
        FormFieldComponent,
        IconComponent,
        ListComponent,
        LoaderComponent,
        SectionHeaderComponent,
        ButtonBarComponent,
        TitleCaseAllPipe,
        DisplaySelectPipe,
        DisplayRelatedPipe,
        AttentionMessageComponent,
        ListSortComponent,
        ListFilterComponent,
        SortIconComponent,
    ],
    providers: []
})

export class UIModule {
  static forRoot(): ModuleWithProviders<UIModule> {
    return {
      ngModule: UIModule,
      providers: []
    };
  }

}
