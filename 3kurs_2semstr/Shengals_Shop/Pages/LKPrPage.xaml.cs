using Shengals_Shop.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Shengals_Shop.Pages
{
    /// <summary>
    /// Логика взаимодействия для LKPrPage.xaml
    /// </summary>
    public partial class LKPrPage : Page
    {
        private Product _currentProduct = new Product();
        public LKPrPage(User selectedUser)
        {
            InitializeComponent();
            DataContext = _currentProduct;
            DataContext = selectedUser;
            ProductGrid.ItemsSource = DB.Context.Product.ToList();
        }

        private void Exit_Btn(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new AutorisationPage());
        }
    }
}
