using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace m.snake
{
	public class HorizontalLine : Figure
	{

		public HorizontalLine (int xLeft, int xRigth, int y, char sym)
		{
			pList = new List<Point> ();
			for (int x = xLeft; x <=xRigth; x++)
			{
				Point p = new Point (x, y, sym);
				pList.Add (p);
			}

		}

	}
}

