// namespace Program
// {
//     public class Solution
//     {
//         public int sum;
//         int[] sumRomanNumerals = new int[] { };
//         static void Main(string[] args)
//         {
//             Solution solution = new Solution();
//             solution.RomanToInt("XX");
//         }
//         public void RomanToInt(string s)
//         {
//             if (s == null)
//             {
//                 System.Console.WriteLine("Error");
//             }
//             else
//             {
//                 s.ToUpper();
//                 Dictionary<string, int> numeral = new Dictionary<string, int>
//                 {
//                     { "I", 1 }, { "II", 2 }, { "III", 3 }, { "V", 5 }, { "X", 10 }, { "L", 50 }, { "C", 100 }, { "D", 500 }, { "M", 1000 }
//                 };
//                 if (numeral.ContainsKey(s))
//                 {
//                     System.Console.WriteLine(numeral[s]);
//                 }
//                 else if (!numeral.ContainsKey(s))
//                 {
//                     Char[] chars = s.ToCharArray();
//                     // int length = chars.Length;
//                     // string firstNumber = chars[0].ToString();
//                     // System.Console.WriteLine(numeral[firstNumber] * length);
//                     for (int i = 0; i <= chars.Length - 1; i++)
//                     {
//                         string identifier = chars[i].ToString();
//                         sumRomanNumerals = new int[] { numeral[identifier] };
//                     }
//                     sum = ArraySum(sumRomanNumerals);
//                     System.Console.WriteLine(sum);
//                 }
//             }
//         }
//         public int ArraySum(int[] anArray)
//         {
//             if (anArray == null || anArray.Length == 0)
//             {
//                 return 0;
//             }
//             else
//             {
//                 return anArray.Sum();
//             }
//         }
//     }
// }


namespace Name
{
    public class Program
    {
        static void Main(string[] args)
        {
            Program program = new Program();
            program.makeWord("ruiww");
        }
        public void makeWord(string word)
        {
            Random random = new Random();
            Char[] characters = word.ToCharArray();
            for (int i = 0; i <= characters.Length - 1; i++)
            {
                int j = random.Next(0, 5);
                
            }
        }
    }
}