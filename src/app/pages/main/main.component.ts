import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  components = [
    { name: 'Button', path: 'button', icon: 'Button' },
    { name: 'Button Toggle', path: 'button-toggle', icon: 'toggle_on' },
    { name: 'Card', path: 'card', icon: 'Card' },
    { name: 'Checkbox', path: 'checkbox', icon: 'Checkbox' },
    { name: 'Datepicker', path: 'datepicker', icon: 'Datepicker' },
    { name: 'Dialog', path: 'dialog', icon: 'Dialog' },
    { name: 'Expansion Panel', path: 'expansion-panel', icon: 'Expansion' },
    { name: 'Form Field', path: 'form-field', icon: 'Form' },
    { name: 'Grid List', path: 'grid-list', icon: 'Grid' },
    { name: 'Icon', path: 'icon', icon: 'Icon' },
    { name: 'Input', path: 'input', icon: 'Input' },
    { name: 'List', path: 'list', icon: 'List' },
    { name: 'Menu', path: 'menu', icon: 'Menu' },
    { name: 'Paginator', path: 'paginator', icon: 'Paginator' },
    { name: 'Progress Bar', path: 'progress-bar', icon: 'Progress' },
    { name: 'Progress Spinner', path: 'progress-spinner', icon: 'Progress' },
    { name: 'Radio Button', path: 'radio-button', icon: 'Radio' },
    { name: 'Select', path: 'select', icon: 'Select' },
    { name: 'Sidenav', path: 'sidenav', icon: 'Sidenav' },
    { name: 'Slide Toggle', path: 'slide-toggle', icon: 'Slide' },
    { name: 'Slider', path: 'slider', icon: 'Slider' },
    { name: 'Snackbar', path: 'snackbar', icon: 'Snackbar' },
    { name: 'Sort Header', path: 'sort-header', icon: 'Sort' },
    { name: 'Stepper', path: 'stepper', icon: 'Stepper' },
    { name: 'Table', path: 'table', icon: 'Table' },
    { name: 'Tabs', path: 'tabs', icon: 'Tabs' },
    { name: 'Toolbar', path: 'toolbar', icon: 'Toolbar' },
    { name: 'Tooltip', path: 'tooltip', icon: 'Tooltip' },
    { name: 'Tree', path: 'tree', icon: 'Tree' },

  ]

}
