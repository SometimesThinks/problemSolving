#include <iostream>
using namespace std;

int main() {
    float weight, height, bmi;
    cin >> weight;
    cin >> height;
    bmi = weight / (height * height);

    if (bmi < 18.5) cout << "Underweight" << endl;
     else if (bmi >= 25) cout << "Overweight" << endl;
     else cout  << "Normal weight" << endl;
    return 0;
}