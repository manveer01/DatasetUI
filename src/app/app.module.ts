import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasetUploadComponent } from './dataset-upload/dataset-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from "@rinminase/ng-charts";

@NgModule({
  declarations: [
    AppComponent,
    DatasetUploadComponent,
    ScatterPlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
