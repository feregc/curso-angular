import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, LazyImageComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, NavbarComponent, LazyImageComponent],
})
export class SharedModule {}
