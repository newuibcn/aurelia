/**
 * Created by alexvizcaino on 22/12/15.
 */
export class TileTypeValueConverter{
    toView(value: number){
        return value == 1 ? 'custom-card-wide' : '';
    }
}