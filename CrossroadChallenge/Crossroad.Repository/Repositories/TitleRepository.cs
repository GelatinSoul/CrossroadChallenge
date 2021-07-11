using Crossroad.DAL.Models;
using Crossroad.Repository.IRepository;
using CrossroadApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Crossroad.Repository.Repositories
{
    public class TitleRepository : ITitleRepository
    {
        internal TitlesContext context;
        internal DbSet<Title> dbSet;
        public TitleRepository(TitlesContext context)
        {

            this.context = context;
            this.dbSet = this.context.Set<Title>();
        }

        public MovieDetail GetDetails(string id)
        {
            int titleID;
            MovieDetail movieDetail = new MovieDetail();

            if (string.IsNullOrEmpty(id))
            {
                return movieDetail;
            }

            id = id.Trim();

            if (!int.TryParse(id, out titleID))
            {
                return movieDetail;
            }

            var title = context.Titles.Where(s => s.TitleId == titleID).FirstOrDefault();

            movieDetail.TitleId = title.TitleId;
            movieDetail.TitleName = title.TitleName;
            movieDetail.ReleaseYear = title.ReleaseYear;

            var story = context.StoryLines.Where(s => s.TitleId == titleID).FirstOrDefault();

            movieDetail.Description = story.Description;

            var titleGenre = context.TitleGenres.Where(s => s.TitleId == titleID).FirstOrDefault();

            var genreId = context.Genres.Where(s => s.Id == titleGenre.GenreId).FirstOrDefault();

            movieDetail.Genre = genreId.Name;

            return movieDetail;
        }

        public List<Title> Search(string name)
        {
            if(String.IsNullOrEmpty(name))
            {
                return new List<Title>();
            }

            var titles = from title in dbSet.AsQueryable<Title>()
                where title.TitleName.Contains(name)
                select title;

            return titles.ToList();

        }
    }
}
