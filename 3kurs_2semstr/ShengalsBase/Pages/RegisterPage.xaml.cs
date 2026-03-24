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

namespace ShengalsBase.Pages
{
    /// <summary>
    /// Логика взаимодействия для RegisterPage.xaml
    /// </summary>
    public partial class RegisterPage : Page
    {
        private User _currentUser = new User();
        public RegisterPage()
        {
            InitializeComponent();
            DataContext = _currentUser;
        }

        private void Register_Click(object sender, RoutedEventArgs e)
        {
            StringBuilder errors = new StringBuilder();
            _currentUser.admin = false;
            if (string.IsNullOrWhiteSpace(_currentUser.fio) && _currentUser.fio.Length > 5)
                errors.AppendLine("Укажите ФИО больше 5 символов");

            if (string.IsNullOrWhiteSpace(_currentUser.login) && _currentUser.login.Length > 5)
                errors.AppendLine("Укажите Login длинною больше 5 символов");

            if (string.IsNullOrWhiteSpace(_currentUser.password) && _currentUser.password.Length > 5)
                errors.AppendLine("Укажите пароль");

            if (!_currentUser.password.Any(char.IsDigit))
                errors.AppendLine("Пароль должен содержать хотя бы одну цифру");

            if (!_currentUser.password.Any(char.IsLetter))
                errors.AppendLine("Пароль должен содержать хотя бы одну букву");

            if (!_currentUser.password.Any(ch => !char.IsLetterOrDigit(ch)))
                errors.AppendLine("Пароль должен содержать хотя бы один специальный символ (!@#$%^&* и т.д.)");

            if (!_currentUser.password.Any(char.IsUpper))
                errors.AppendLine("Пароль должен содержать хотя бы одну заглавную букву");

            if (!_currentUser.password.Any(char.IsLower))
                errors.AppendLine("Пароль должен содержать хотя бы одну строчную букву");

            if (errors.Length > 0)
            {
                MessageBox.Show(errors.ToString());
                return;
            }

            if (_currentUser.Id == 0)
            {
                DB.Context.User.Add(_currentUser);
            }
            try
            {
                DB.Context.SaveChanges();
                MessageBox.Show("Информация сохранена", "Сообщение", MessageBoxButton.OK, MessageBoxImage.Information);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString(), "Сообщение", MessageBoxButton.OK, MessageBoxImage.Information);
            }
            NavigationService.Navigate(new LKPage(DataContext as User));
            
        }

        private void Auto_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new AutorisationPage());
        }
    }
}
