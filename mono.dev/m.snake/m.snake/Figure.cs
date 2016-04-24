using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace m.snake
{
	public class Figure
	{
		protected List<Point> pList;
		public void Draw()
		{
			foreach (Point p in pList) 
			{
				p.Draw ();
			}
		}
		public bool isHit (Point p)
		{
			foreach (Point i in pList) 
			{
				if (i.isHit(p)) return true;
			}
			return false;
		}
	}
}

