#include <iostream>
using namespace std;

int main() {
    int a, b, c, d;
    cin >> a >> b;
    cin >> c >> d;

    cout << (a + d <= b + c ? a + d : b + c) << endl;   
    return 0;
}