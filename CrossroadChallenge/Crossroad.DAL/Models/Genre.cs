using System;
using System.Collections.Generic;

#nullable disable

namespace Crossroad.DAL.Models
{
    public partial class Genre
    {
        public Genre()
        {
            TitleGenres = new HashSet<TitleGenre>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<TitleGenre> TitleGenres { get; set; }
    }
}
