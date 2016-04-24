using System;

namespace m.snake
{
	public class Point
	{
		public int x;
		public int y;
		public char sym;

		public Point ()
		{
			x = 0;
			y = 0;
			sym = ' ';

		}
		public Point (char _sym)
		{
			x = 0;
			y = 0;
			sym = _sym;

		}

		public Point( int _x, int _y, char _sym)
		{
			x = _x;
			y = _y;
			sym = _sym;

		}

		public Point( Point p)
		{
			x = p.x;
			y = p.y;
			sym = p.sym;
		}
		public bool isHit(Point p)
		{
			return p.x == x && p.y == y;
		}
		public void Move(int offset, Direction direction)
		{
			switch (direction) {
			case Direction.LEFT:
				x = x - offset;
				break;
			case Direction.RIGHT:
				x = x + offset;
				break;
			case Direction.UP:
				y = y - offset;
				break;
			case Direction.DOWN:
				y = y + offset;
				break;
			}
		}


		public void Draw()
		{
			Console.SetCursorPosition (x, y);
			Console.Write (sym);
		}

		public void Clear()
		{
			Console.SetCursorPosition (x, y);
			Console.Write(' ');
		}
		public void Draw(char _sym)
		{
			Console.SetCursorPosition (x, y);
			Console.Write (_sym);
		}

	}
}

