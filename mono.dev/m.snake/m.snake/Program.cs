using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;


namespace m.snake
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			Console.CursorVisible = false;
			//Console.SetWindowSize (200, 100);
			//Console.SetBufferSize (200, 100);

			int level = 1;
			MapObjectsList mapObjectsList = new MapObjectsList (Console.BufferWidth,Console.BufferHeight,level);
			Point p = new Point (6,2,'*');
			Snake snake = new Snake(p,4,Direction.RIGHT);

			mapObjectsList.Add (snake);
			mapObjectsList.Draw ();

			FoodCreator foodCreator = new FoodCreator ('$' );
			Point food=foodCreator.CreateFood (mapObjectsList);
			food.Draw ();




			while (true) {
				if (snake.Eat(food)){
					food=foodCreator.CreateFood (mapObjectsList);
					food.Draw ();
					snake.Draw();
				}
				else{
					if (! snake.Move (mapObjectsList)) {
						Console.Write ("Ты проиграл");
						break;
					}
				}
				Thread.Sleep (100);

				if (Console.KeyAvailable) {
					ConsoleKeyInfo key = Console.ReadKey ();
					snake.HandleKey (key.Key);
				}

			}
			Console.ReadLine ();

		}

	}
}
