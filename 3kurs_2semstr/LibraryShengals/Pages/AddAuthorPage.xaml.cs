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

namespace LibraryShengals.Pages
{
    /// <summary>
    /// Логика взаимодействия для AddAuthorPage.xaml
    /// </summary>
    public partial class AddAuthorPage : Page
    {
        private Authors _currentAuthors = new Authors();

        public AddAuthorPage(Authors selectedAuthors)
        {
            InitializeComponent();
            if (selectedAuthors != null)
                _currentAuthors = selectedAuthors;
            DataContext = _currentAuthors;
        }
        private void SaveBtn_Click(object sender, RoutedEventArgs e)
        {
            StringBuilder errors = new StringBuilder();
            if (string.IsNullOrWhiteSpace(_currentAuthors.FirstName))
                errors.AppendLine("Укажите имя автора");
            if (string.IsNullOrWhiteSpace(_currentAuthors.LastName))
                errors.AppendLine("Укажите фамилию автора");
            if (string.IsNullOrWhiteSpace(_currentAuthors.Portaint))
                errors.AppendLine("Укажите название портрета");
            if (errors.Length > 0)
            {
                MessageBox.Show(errors.ToString());
                return;
            }

            if (_currentAuthors.Id == 0)
                LibraryShengalsEntities.GetContext().Authors.Add(_currentAuthors);
            try
            {
                LibraryShengalsEntities.GetContext().SaveChanges();
                MessageBox.Show("Информация сохранена!");
                LibraryManager.MainFrame.Navigate(new AuthorPage());

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString());
            }
        }
    }
}
