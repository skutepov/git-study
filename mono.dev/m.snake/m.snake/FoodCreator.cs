using System;

namespace m.snake
{
	public class FoodCreator
	{

		char sym;
		Random random = new Random();

		public FoodCreator (char _sym)
		{

			sym = _sym;
		}
		public Point CreateFood(MapObjectsList mapObjectsList)
		{
			int x, y;
			Point p;
			do {
				x = random.Next (2, mapObjectsList.mapWidht - 2);
				y = random.Next (2, mapObjectsList.mapHeight - 2);
				p = new Point (x, y, sym);
			} while (mapObjectsList.isHit(p)) ;
			return p;
		}
	}
}

