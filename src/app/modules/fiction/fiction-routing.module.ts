import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetectiveResolver } from 'src/app/modules/fiction/resolvers/detective.resolver';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { DetectivesResolver } from './resolvers/detectives.resolver';
import { HorrorResolver } from './resolvers/horror.resolver';
import { HorrorsResolver } from './resolvers/horrors.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'detective',
        component: ProductsListComponent,
        resolve: {
          detectives: DetectivesResolver,
        },
      },
      {
        path: 'detective/:id',
        component: ProductDetailsComponent,
        resolve: {
          detective: DetectiveResolver,
        },
      },
      {
        path: 'horror',
        component: ProductsListComponent,
        resolve: {
          horrors: HorrorsResolver,
        },
      },
      {
        path: 'horror/:id',
        component: ProductDetailsComponent,
        resolve: {
          horror: HorrorResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FictionRoutingModule {}
