import { Component } from '@angular/core';

import '@ui5/webcomponents-fiori/dist/SideNavigation.js';
import '@ui5/webcomponents-fiori/dist/SideNavigationItem.js';
import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
import '@ui5/webcomponents-icons/dist/AllIcons.js';
import '@ui5/webcomponents-icons-business-suite/dist/AllIcons.js';
import '@ui5/webcomponents/dist/Button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui5';
}
