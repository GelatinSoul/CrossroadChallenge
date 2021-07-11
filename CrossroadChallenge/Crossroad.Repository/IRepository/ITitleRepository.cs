using Crossroad.DAL.Models;
using CrossroadApp.Models;
using System.Collections.Generic;

namespace Crossroad.Repository.IRepository
{
    public interface ITitleRepository
    {
        MovieDetail GetDetails(string id);
        List<Title> Search(string name);
    }
}
