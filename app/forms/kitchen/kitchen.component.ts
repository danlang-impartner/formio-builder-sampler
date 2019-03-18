import { Component } from '@angular/core';
import { FORM } from './form';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent {
  public form: any = FORM;
  public options: any = {
    hooks: {
      beforeSubmit: (submission: object, cb: any) => {
        console.log('Before Submit');
        console.log(submission);
        setTimeout(() => cb(null, submission), 1000);
      }
    }
  };
  /* tslint:disable:max-line-length */
  public submission: any = {
    data: {
      user: {
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joe@example.com',
        kids: [
          'Susie',
          'Jack'
        ]
      },
      cars: [
        {
          make: 'Jeep',
          model: 'Wrangler',
          year: '2010'
        },
        {
          make: 'Ford',
          model: 'Mustang',
          year: '2014'
        }
      ],
      signature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABHAAAACWCAYAAAC2JH9WAAAVGUlEQVR4Xu3dX2xW5R0H8B8kY7HqKskwLkaIyRZjFBanyWK1zjgvBGm27EJQmpHMCImgF4uwSbfdaJtQvGJqhsviSDB2dzoaIJo4LToS/2yRqrvTAYuJxW0Ux6ZMZXle01daWkax79vzvM/nJCSUvu85v9/n93DzzTnPmXPs2OET4SBAgAABAgQIECBAgAABAgQIEKiswBwBTmVnozACBAgQIECAAAECBAgQIECAQE1AgGMhECBAgAABAgQIECBAgAABAgQqLiDAqfiAlEeAAAECBAgQIECAAAECBAgQEOBYAwQIECBAgAABAgQIECBAgACBigsIcCo+IOURIECAAAECBAgQIECAAAECBAQ41gABAgQIECBAgAABAgQIECBAoOICApyKD0h5BAgQIECAAAECBAgQIECAAAEBjjVAgAABAgQIECBAgAABAgQIEKi4gACn4gNSHgECBAgQIECAAAECBAgQIEBAgGMNECBAgAABAgQIECBAgAABAgQqLiDAqfiAlEeAAAECBAgQIECAAAECBAgQEOBYAwQIECBAgAABAgQIECBAgACBigsIcCo+IOURIECAAAECBAgQIECAAAECBAQ41gABAgQIECBAgAABAgQIECBAoOICApyKD0h5BAgQIECAAAECBAgQIECAAAEBjjVAgAABAgQIECBAgAABAgQIEKi4gACn4gNSHgECBAgQIECAAAECBAgQIEBAgGMNECBAgAABAgQIECBAgAABAgQqLiDAqfiAlEeAAAECBAgQIECAAAECBAgQEOBYAwQIECBAgAABAgQIECBAgACBigsIcCo+IOURIECAAAECBAgQIECAAAECBAQ41gABAgQIECBAgAABAgQIECBAoOICApyKD0h5BAgQIECAAAECBAgQIECAAAEBjjVAgAABAgQIECBAgAABAgQIEKi4gACn4gNSHgECBAgQIECAAAECBAgQIEBAgGMNECBAgAABAgQIECBAgAABAgQqLiDAqfiAlEeAAAECBAgQIECAAAECBAgQEOBYAwQIECBAgAABAgQIECBAgACBigsIcCo+IOURIECAAAECBAgQIECAAAECBAQ41gABAgQIECBAgAABAgQIECBAoOICApyKD0h5BAgQIECAAAECBAgQIECAAAEB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Z9f4/A6h9HhUekzqbA534JyNmu8QIECAAAECBAgQIFCCgACnhCnrkUCTBabaA+ef/zxSr+Sdd/4azz8/FO+//49oazuntgdOd/ftTa7U5QgQIECAAAECBAgQIJCHgAAnjzmpkgABAgQIECBAgAABAgQIEChYQIBT8PC1ToAAAQIECBAgQIAAAQIECOQhIMDJY06qJECAAAECBAgQIECAAAECBAoWEOAUPHytEyBAgAABAgQIECBAgAABAnkICHDymJMqCRAgQIAAAQIECBAgQIAAgYIFBDgFD1/rBAgQIECAAAECBAgQIECAQB4CApw85qRKAgQIECBAgAABAgQIECBAoGABAU7Bw9c6AQIECBAgQIAAAQIECBAgkIeAACePOamSAAECBAgQIECAAAECBAgQKFhAgFPw8LVOgAABAgQIECBAgAABAgQI5CEgwMljTqokQIAAAQIECBAgQIAAAQIEChYQ4BQ8fK0TIECAAAECBAgQIECAAAECeQgIcPKYkyoJECBAgAABAgQIECBAgACBggUEOAUPX+sECBAgQIAAAQIECBAgQIBAHgICnDzmpEoCBAgQIECAAAECBAgQIECgYAEBTsHD1zoBAgQIECBAgAABAgQIECCQh4AAJ485qZIAAQIECBAgQIAAAQIECBAoWECAU/DwtU6AAAECBAgQIECAAAECBAjkISDAyWNOqiRAgAABAgQIECBAgAABAgQKFhDgFDx8rRMgQIAAAQIECBAgQIAAAQJ5CAhw8piTKgkQIECAAAECBAgQIECAAIGCBQQ4BQ9f6wQIECBAgAABAgQIECBAgEAeAgKcPOakSgIECBAgQIAAAQIECBAgQKBgAQFOwcPXOgECBAgQIECAAAECBAgQIJCHgAAnjzmpkgABAgQIECBAgAABAgQIEChYQIBT8PC1ToAAAQIECBAgQIAAAQIECOQhIMDJY06qJECAAAECBAgQIECAAAECBAoWEOAUPHytEyBAgAABAgQIECBAgAABAnkICHDymJMqCRAgQIAAAQIECBAgQIAAgYIFBDgFD1/rBAgQIECAAAECBAgQIECAQB4CApw85qRKAgQIECBAgAABAgQIECBAoGABAU7Bw9c6AQIECBAgQIAAAQIECBAgkIeAACePOamSAAECBAgQIECAAAECBAgQKFhAgFPw8LVOgAABAgQIECBAgAABAgQI5CEgwMljTqokQIAAAQIECBAgQIAAAQIEChYQ4BQ8fK0TIECAAAECBAgQIECAAAECeQgIcPKYkyoJECBAgAABAgQIECBAgACBggUEOAUPX+sECBAgQIAAAQIECBAgQIBAHgICnDzmpEoCBAgQIECAAAECBAgQIECgYAEBTsHD1zoBAgQIECBAgAABAgQIECCQh4AAJ485qZIAAQIECBAgQIAAAQIECBAoWECAU/DwtU6AAAECBAgQIECAAAECBAjkISDAyWNOqiRAgAABAgQIECBAgAABAgQKFhDgFDx8rRMgQIAAAQIECBAgQIAAAQJ5CAhw8piTKgkQIECAAAECBAgQIECAAIGCBQQ4BQ9f6wQIECBAgAABAgQIECBAgEAeAgKcPOakSgIECBAgQIAAAQIECBAgQKBgAQFOwcPXOgECBAgQIECAAAECBAgQIJCHgAAnjzmpkgABAgQIECBAgAABAgQIEChYQIBT8PC1ToAAAQIECBAgQIAAAQIECOQhIMDJY06qJECAAAECBAgQIECAAAECBAoWEOAUPHytEyBAgAABAgQIECBAgAABAnkICHDymJMqCRAgQIAAAQIECBAgQIAAgYIFBDgFD1/rBAgQIECAAAECBAgQIECAQB4CApw85qRKAgQIECBAgAABAgQIECBAoGABAU7Bw9c6AQIECBAgQIAAAQIECBAgkIeAACePOamSAAECBAgQIECAAAECBAgQKFhAgFPw8LVOgAABAgQIECBAgAABAgQI5CEgwMljTqokQIAAAQIECBAgQIAAAQIEChYQ4BQ8fK0TIECAAAECBAgQIECAAAECeQgIcPKYkyoJECBAgAABAgQIECBAgACBggUEOAUPX+sECBAgQIAAAQIECBAgQIBAHgICnDzmpEoCBAgQIECAAAECBAgQIECgYAEBTsHD1zoBAgQIECBAgAABAgQIECCQh4AAJ485qZIAAQIECBAgQIAAAQIECBAoWECAU/DwtU6AAAECBAgQIECAAAECBAjkISDAyWNOqiRAgAABAgQIECBAgAABAgQKFhDgFDx8rRMgQIAAAQIECBAgQIAAAQJ5CAhw8piTKgkQIECAAAECBAgQIECAAIGCBQQ4BQ9f6wQIECBAgAABAgQIECBAgEAeAgKcPOakSgIECBAgQIAAAQIECBAgQKBgAQFOwcPXOgECBAgQIECAAAECBAgQIJCHgAAnjzmpkgABAgQIECBAgAABAgQIEChY4H/QCQkasfUe1AAAAABJRU5ErkJggg=='
    }
  };
  /* tslint:enable:max-line-length */

  onRender() {
    console.log('onRender');
  }
  onSubmit(value: any) {
    console.log('onSubmit');
    console.log(value);
  }
  onChange(value: any) {
    console.log('onChange');
    console.log(value);
  }
}
