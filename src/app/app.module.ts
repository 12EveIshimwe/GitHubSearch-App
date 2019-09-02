import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
 declarations: [
   AppComponent,
   GithubComponent,
   GithubComponent,
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,
   GithubFormComponent,
   HttpClientModule,
 ],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule { }


