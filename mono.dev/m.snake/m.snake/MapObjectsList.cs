using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace m.snake
{
	public class MapObjectsList
	{
		public int mapWidht;
		public int mapHeight;
		char sym='+';
		List<Figure> figures = new List<Figure>();

		public MapObjectsList (int _mapWidth, int _mapHeigth,int level)
		{
			mapHeight = _mapHeigth;
			mapWidht = _mapWidth;
			HorizontalLine upLine = new HorizontalLine (0, mapWidht-1, 0, '+');
			HorizontalLine downLine = new HorizontalLine (0, mapWidht-1,mapHeight-1	, sym);
			VerticalLine leftLine = new VerticalLine (0, mapHeight-1, 0, '+');
			VerticalLine rigthLine = new VerticalLine (0, mapHeight-1, mapWidht-1, sym);
			this.Add (upLine);
			this.Add (downLine);
			this.Add (leftLine);
			this.Add (rigthLine);
		}
		public void Add(Figure figure)
		{
			this.figures.Add (figure);
		}
		public bool isHit(Point p)
		{
			foreach(Figure f in figures)
			{
				if (f.isHit(p)) return true; 
			}
			return false;
		}
		public void Draw()
		{
			foreach(var f in figures)
			{
				f.Draw();
			}	
		}
	}
}

