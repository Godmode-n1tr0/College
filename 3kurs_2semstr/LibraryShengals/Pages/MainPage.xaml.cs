using LibraryShengals.Pages;
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

namespace LibraryShengals
{
    /// <summary>
    /// Логика взаимодействия для MainPage.xaml
    /// </summary>
    public partial class MainPage : Page
    {
        public MainPage()
        {
            InitializeComponent();
            DGridLibrary.ItemsSource = LibraryShengalsEntities.GetContext().Books.ToList();
        }

        private void BtnEdit_Click(object sender, RoutedEventArgs e)
        {
            LibraryManager.MainFrame.Navigate(new AddBooksPage((sender as Button).DataContext as Books));
        }


        private void Page_IsVisibleChanged(object sender, DependencyPropertyChangedEventArgs e)
        {
            if (Visibility == Visibility.Visible)
            {
                LibraryShengalsEntities.GetContext().ChangeTracker.Entries().ToList().ForEach(p => p.Reload());
                DGridLibrary.ItemsSource = LibraryShengalsEntities.GetContext().Books.ToList();
            }
        }

        private void BtnAdd(object sender, RoutedEventArgs e)
        {
           LibraryManager.MainFrame.Navigate(new AddBooksPage(null));
        }

        private void BtnDel(object sender, RoutedEventArgs e)
        {
            var LibraryForRemoving = DGridLibrary.SelectedItems.Cast<Books>().ToList();
            if (MessageBox.Show($"Вы точно хотите удалить следующие {LibraryForRemoving.Count()} элементов?", "Внимание", MessageBoxButton.YesNo, MessageBoxImage.Question) == MessageBoxResult.Yes)
            {
                try
                {
                    LibraryShengalsEntities.GetContext().Books.RemoveRange(LibraryForRemoving);
                    LibraryShengalsEntities.GetContext().SaveChanges();
                    MessageBox.Show("Данные удалены");

                    DGridLibrary.ItemsSource = LibraryShengalsEntities.GetContext().Books.ToList();
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message.ToString());
                }
            }
        }
        private void TBoxSearc_TextChanged(object sender, TextChangedEventArgs e)
        {
            UpdateBook();
        }
        private void UpdateBook()
        {
            var currentTours = LibraryShengalsEntities.GetContext().Books.ToList();
            currentTours = currentTours.Where(p => p.Title.ToLower().Contains(TBoxSearc.Text.ToLower())).ToList();
            DGridLibrary.ItemsSource = currentTours.OrderBy(p => p.AuthorId).ToList();

        }
        private void BtnAddGenre(object sender, RoutedEventArgs e)
        {

        }
    }
}
