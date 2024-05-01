import { Pipe } from "@angular/core";
import { Hero } from "../interfaces/hero.interface";

@Pipe({
  name: 'sortBy',
  standalone: true
})

export class SortByPipe {
  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    if (!sortBy)
      return heroes;

    return this.sortByProperty(heroes, sortBy);
  }

  private sortByProperty(heroes: Hero[], sortBy: keyof Hero): Hero[] {
    return heroes.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      return 0;
    });
  }
}
