import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="col-3">
          <h5>Buscar:</h5>
        </div>
        <div class="col-9">
          <input
            (keyup.enter)="searchTag()"
            type="text"
            placeholder="Biscar gifs..."
            class="form-control"
            #txtTagInput
          />
        </div>
      </div>
    </nav>
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  // searchTag( newTag: string){
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
