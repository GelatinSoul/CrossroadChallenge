using Crossroad.DAL.Models;
using Crossroad.Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Crossroad.Service
{
    class TitlesService
    {
        private IGenericRepository<Title> TitleRepository;
        public void TitlesServices(IGenericRepository<Title> TitleRepository)
        {
            this.TitleRepository = TitleRepository;
        }

        //public IEnumerable<Title> search(string names)
        //{
        //    var query = from st in TitleRepository.GetAll()
        //                where 
        //}
    }
}