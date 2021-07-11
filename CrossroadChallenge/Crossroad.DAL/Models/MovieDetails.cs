using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrossroadApp.Models
{
    public class MovieDetail
    {
        public MovieDetail()
        {
        }
        public int TitleId { get; set; }
        public string TitleName { get; set; }
        public string Description { get; set; }
        public int? ReleaseYear { get; set; }

        public string Genre { get; set; }

    }
}
