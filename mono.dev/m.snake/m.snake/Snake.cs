using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace m.snake
{
	public class Snake : Figure
	{
		public Direction direction;
		public Snake (Point tail, int length, Direction _direction)
		{
			direction = _direction;
			pList = new List<Point> ();
			if (length>0) pList.Add (tail);
			for (int i=1; i<length; i++) {
				Point p = GenNextPoint ();
				pList.Add (p);
			}
		}
		public bool Move(MapObjectsList fList)
		{
			Point tail = pList.First ();
			pList.Remove (tail);
			Point head = GenNextPoint ();
			if (fList.isHit (head))
				return false;
			pList.Add (head);
			tail.Clear ();
			head.Draw ();
			return true;
		}
		public Point GenNextPoint()
		{
			Point head = pList.Last ();
			Point nextPoint = new Point (head);
			nextPoint.Move (1, direction);
			return nextPoint;
		}
		public bool Eat (Point food)
		{
			Point head = GenNextPoint ();
			if (head.isHit (food)) {
				food.sym = head.sym;
				//food.Draw ();
				pList.Add (food);
				return true;
			}
			return false;
		}
		public void HandleKey(ConsoleKey key)
		{
			switch (key) {
				case ConsoleKey.LeftArrow:
					direction = Direction.LEFT;
					break;
				case ConsoleKey.RightArrow:
					direction = Direction.RIGHT;
					break;
				case ConsoleKey.DownArrow:
					direction = Direction.DOWN;
					break;
				case ConsoleKey.UpArrow:
					direction = Direction.UP;
					break;
			}
		}
	}
}

