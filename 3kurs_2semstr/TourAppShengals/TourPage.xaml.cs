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
    /// Логика взаимодействия для TourPage.xaml
    /// </summary>
    public partial class TourPage : Page
    {
        public TourPage()
        {
            InitializeComponent();
            var allTypes = TourBaseEntities.GetContext().Type.ToList();
            allTypes.Insert(0, new Type
            {
                Name = "Все типы"
            });
            CheckActual.IsChecked = true;
            ComboType.SelectedIndex = 0;
            ComboType.ItemsSource = allTypes;



            var currentTours = TourBaseEntities.GetContext().Tour.ToList();
            //UpdateTour();

            LViewTour.ItemsSource = currentTours;
        }

        private void TBoxSearc_TextChanged(object sender, TextChangedEventArgs e)
        {
            UpdateTour();
        }

        private void ComboType_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            UpdateTour();
        }

        private void CheckActual_Checked(object sender, RoutedEventArgs e)
        {
            UpdateTour();

        }
        private void UpdateTour()
        {
            var currentTours = TourBaseEntities.GetContext().Tour.ToList();
            if (ComboType.SelectedIndex > 0)
            {
                currentTours = currentTours.Where(p => p.Type.Contains(ComboType.SelectedItem as Type)).ToList();
            }
            currentTours = currentTours.Where(p => p.Name.ToLower().Contains(TBoxSearc.Text.ToLower())).ToList();

            if (CheckActual.IsChecked.Value)
            {
                currentTours = currentTours.Where(p => p.IsActual).ToList();
            }
            LViewTour.ItemsSource = currentTours.OrderBy(p => p.TicketCount).ToList();

        }
    }
}
