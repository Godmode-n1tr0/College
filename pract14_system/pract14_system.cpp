#include <iostream>
#include <Windows.h>
#include <random>
#include <semaphore>
#define MAX_CLIENTS 20
#define CLUB_CAPACITY 4

struct ClientRecord {
    DWORD threadId; // Идентификатор потока
    DWORD arriveTick; // Время прихода посетителя
    DWORD startTick; // Время начала обслуживания
    DWORD endTick; // Время завершения обслуживания
    BOOL served; // Был ли обслужен
    BOOL timeout; // Ушел ли по таймауту
};

struct ClubState {
    ClientRecord clients[MAX_CLIENTS]; // Информация о посетителях
    LONG currentVisitors; // Текущее число занятых мест
    LONG maxVisitors; // Максимум одновременно занятых мест
    LONG servedCount; // Количество обслуженных посетителей
    LONG timeoutCount; // Количество ушедших по таймауту
};

using namespace std;
HANDLE semaphore;
random_device rd;
mt19937 gen(rd());
uniform_int_distribution<> dist(1, 100);

int main()
{
    setlocale(0, "ru");
    int n;
    semaphore = CreateSemaphore(NULL, 1, 1, NULL);
    cout << "Сколько людей пришло в клуб: " << endl;
    cin >> n;
    if (n < 1) {
        cout << "Введите правильное число людей:" << endl;
        cin >> n;
        return;
    }
    if (n > 10) {
        cout << "Введите правильное число людей:" << endl;
        cin >> n;
        return;
    }
}
