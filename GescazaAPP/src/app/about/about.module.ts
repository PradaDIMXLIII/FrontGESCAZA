import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './about/info/info.component';
import { LinksComponent } from './about/links/links.component';
import { AuthorsComponent } from './about/authors/authors.component';
import { AuthorComponent } from './about/authors/author/author.component';


@NgModule({
  declarations: [AboutComponent, InfoComponent, LinksComponent, AuthorsComponent, AuthorComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
