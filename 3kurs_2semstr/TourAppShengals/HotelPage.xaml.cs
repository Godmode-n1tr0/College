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

namespace TourAppShengals
{
    /// <summary>
    /// Логика взаимодействия для HotelPage.xaml
    /// </summary>
    public partial class HotelPage : Page
    {
        public HotelPage()
        {
            InitializeComponent();

            DGridHotel.ItemsSource = TourBaseEntities.GetContext().Hotel.ToList();
        }

        private void BtnEdit_Click(object sender, RoutedEventArgs e)
        {
            Manager.MainFrame.Navigate(new AddEditHotelPage((sender as Button).DataContext as Hotel));
        }


        private void Page_IsVisibleChanged(object sender, DependencyPropertyChangedEventArgs e)
        {
            if (Visibility == Visibility.Visible)
            {
                TourBaseEntities.GetContext().ChangeTracker.Entries().ToList().ForEach(p => p.Reload());
                DGridHotel.ItemsSource = TourBaseEntities.GetContext().Hotel.ToList();
            }
        }

        private void BtnAdd(object sender, RoutedEventArgs e)
        {
            Manager.MainFrame.Navigate(new AddEditHotelPage(null));
        }

        private void BtnDel(object sender, RoutedEventArgs e)
        {
            var HotelForRemoving = DGridHotel.SelectedItems.Cast<Hotel>().ToList();
            if (MessageBox.Show($"Вы точно хотите удалить следующие {HotelForRemoving.Count()} элементов?", "Внимание", MessageBoxButton.YesNo, MessageBoxImage.Question) == MessageBoxResult.Yes)
            {
                try
                {
                    TourBaseEntities.GetContext().Hotel.RemoveRange(HotelForRemoving);
                    TourBaseEntities.GetContext().SaveChanges();
                    MessageBox.Show("Данные удалены");

                    DGridHotel.ItemsSource = TourBaseEntities.GetContext().Hotel.ToList();
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message.ToString());
                }
            }
        }
    }
}
