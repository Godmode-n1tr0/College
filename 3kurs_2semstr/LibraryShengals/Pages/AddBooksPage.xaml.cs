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
    /// Логика взаимодействия для AddBooksPage.xaml
    /// </summary>
    public partial class AddBooksPage : Page
    {
        private Books _currentBooks = new Books();
        private Authors _currentAuthor = new Authors();
        private Genres _currentGenre = new Genres();
        public AddBooksPage(Books selectedBooks)
        {
            InitializeComponent();
            if (selectedBooks != null)
                _currentBooks = selectedBooks;
            ComboGenres.ItemsSource = LibraryShengalsEntities.GetContext().Genres.ToList();
            ComboAuthor.ItemsSource = LibraryShengalsEntities.GetContext().Authors.ToList();
            DataContext = _currentGenre;
            DataContext = _currentAuthor;
            DataContext = _currentBooks;
        }

        private void SaveBtn_Click(object sender, RoutedEventArgs e)
        {
            StringBuilder errors = new StringBuilder();
            if (string.IsNullOrWhiteSpace(_currentBooks.Title))
                errors.AppendLine("Укажите заголовок книги");
            if (_currentBooks.Authors == null)
                errors.AppendLine("Выберите Автора");
            if (_currentBooks.PublicationYear == null)
                errors.AppendLine("Укажите дату публикации");
            if (_currentBooks.Genres == null)
               errors.AppendLine("Выберите Жанр");
            if (errors.Length > 0)
            {
                MessageBox.Show(errors.ToString());
                return;
            }

            if (_currentBooks.Id == 0)
                LibraryShengalsEntities.GetContext().Books.Add(_currentBooks);
             

            try
            {
                LibraryShengalsEntities.GetContext().SaveChanges();
                MessageBox.Show("Информация сохранена!");
                LibraryManager.MainFrame.Navigate(new MainPage());
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message.ToString());
            }
        }
    }
}
