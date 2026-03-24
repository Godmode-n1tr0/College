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
    /// Логика взаимодействия для AutorisationPage.xaml
    /// </summary>
    public partial class AutorisationPage : Page
    {
        private User _currentUser = new User();

        public AutorisationPage()
        {
            InitializeComponent();
            DataContext = _currentUser;
        }

        private void Auto_Click(object sender, RoutedEventArgs e)
        {
            StringBuilder errors = new StringBuilder();

            var existingUser = DB.Context.User.FirstOrDefault(u => u.login == _currentUser.login && u.password == _currentUser.password);
            if (existingUser == null)
            {
                errors.Append("Неверный Логин и пароль");
            }
            if (errors.Length > 0)
            {
                MessageBox.Show(errors.ToString());
                return;
            }

            MessageBox.Show("Добро пожаловать " + existingUser.fio, "Сообщение", MessageBoxButton.OK, MessageBoxImage.Information);
            if (existingUser.Role == 2)
                NavigationService.Navigate(new AdminPage(selectedUser: existingUser));
            else if (existingUser.Role == 1)
                NavigationService.Navigate(new LKPrPage(selectedUser: existingUser));
            else
                NavigationService.Navigate(new LKPoPage(selectedUser: existingUser));
        }

        private void Register_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new RegistrPage());
        }
    }
}
