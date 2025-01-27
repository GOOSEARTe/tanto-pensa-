import { HomeViewModel } from './home-view-model';
import { handleButtonTap } from './home-page-handlers';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = new HomeViewModel();
}

export function onTap(args) {
  handleButtonTap(args.object.page.bindingContext);
}